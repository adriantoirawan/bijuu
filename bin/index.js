#!/usr/bin/env node

const { program } = require('commander');
const { select, input, confirm } = require('@inquirer/prompts');
const pc = require('picocolors');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const pkg = require('../package.json');
const figlet = require('figlet');
const gradient = require('gradient-string');

// Display Ascii Banner
const displayBanner = () => {
  return new Promise((resolve) => {
    figlet('BIJUU', { font: 'Standard' }, (err, data) => {
      if (!err) {
        console.log(gradient.pastel.multiline(data));
      }
      resolve();
    });
  });
};

program
  .name('bijuu')
  .description('Hacktiv8 Learning Companion - Naruto Edition')
  .version(pkg.version, '-v, --version', 'Output the current version');

program
  .command('summon')
  .description('Summon the scrolls (Kuchiyose no Jutsu)')
  .action(async () => {
    const { default: ora } = await import('ora');
    await displayBanner();
    
    console.log(pc.yellow('\n🦊 Kurama: "So, you require my chakra? Tell me the details of your mission..."\n'));

    try {
      const templatesDir = path.join(__dirname, '..', 'templates');

      const phase = await select({
        message: 'Select Phase:',
        choices: [
          { name: 'Phase 0 (Genin Academy)', value: '0' },
          { name: 'Phase 1 (Chunin Exams)', value: '1' },
          { name: 'Phase 2 (Jonin Operations)', value: '2' },
          { name: 'Phase 3 (Anbu Black Ops)', value: '3' },
        ].map(c => {
          const d = path.join(templatesDir, `phase-${c.value}`);
          if (!fs.existsSync(d) || fs.readdirSync(d).length === 0) c.disabled = '(coming soon)';
          return c;
        }),
      });

      const materialType = await select({
        message: 'Select Material Type:',
        choices: [
          { name: 'Lectures', value: 'lectures' },
          { name: 'Ungraded Challenges (UC)', value: 'ucs' },
          { name: 'Graded Challenges (GC)', value: 'gcs' },
          { name: 'Simulasi Live Code (SLC)', value: 'slcs' },
          { name: 'Live Code (LC)', value: 'lcs' },
          { name: 'Individual Project (IP)', value: 'ips' },
          { name: 'Pair Project (PP)', value: 'pps' },
        ].map(c => {
          const d = path.join(templatesDir, `phase-${phase}`, c.value);
          if (!fs.existsSync(d) || fs.readdirSync(d).length === 0) c.disabled = '(coming soon)';
          return c;
        }),
      });

      const missionDir = path.join(templatesDir, `phase-${phase}`, materialType);
      const availableMissions = fs.existsSync(missionDir) ? fs.readdirSync(missionDir, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name) : [];
      
      if (availableMissions.length === 0) {
        console.error(pc.red(`\n❌ Kurama: "Fool! I have no missions here."`));
        process.exit(1);
      }

      const missionId = await select({
        message: 'Select Mission ID:',
        choices: availableMissions.map(m => ({ name: m, value: m }))
      });

      const templatePath = path.join(__dirname, '..', 'templates', `phase-${phase}`, materialType, missionId);
      const destPath = path.join(process.cwd(), '.scrolls', `phase-${phase}`, materialType, missionId);

      if (!fs.existsSync(templatePath)) {
        console.error(pc.red(`\n❌ Kurama: "Fool! I have no chakra for Phase ${phase} > ${materialType} > ${missionId} yet."`));
        process.exit(1);
      }

      if (fs.existsSync(destPath)) {
        const answer = await confirm({ 
          message: pc.yellow(`Scrolls for this mission already exist. Do you want to overwrite them?`), 
          default: false 
        });
        if (!answer) {
          console.log(pc.green('Aborted safely. Your existing scrolls are untouched.'));
          process.exit(0);
        }
      }

      console.log(); // Spacing
      const spinner1 = ora('Weaving hand signs...').start();
      spinner1.color = 'yellow';
      await new Promise((r) => setTimeout(r, 800));
      spinner1.succeed('Signs woven.');

      const spinner2 = ora('Gathering Nine-Tails Chakra...').start();
      spinner2.color = 'red';
      await new Promise((r) => setTimeout(r, 1000));
      spinner2.succeed('Chakra gathered.');

      const spinner3 = ora('Unsealing the scrolls...').start();
      spinner3.color = 'green';
      
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }

      fs.cpSync(templatePath, destPath, { recursive: true });
      
      await new Promise((r) => setTimeout(r, 500));
      spinner3.succeed(`Kuchiyose successful! Scrolls placed in ./${path.relative(process.cwd(), destPath)}`);

      // Automagic gitignore handling
      const gitignorePath = path.join(process.cwd(), '.gitignore');
      const gitignoreEntry = '\n# bijuu ninja scrolls\n.scrolls\n';
      
      if (fs.existsSync(gitignorePath)) {
        const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
        if (!gitignoreContent.includes('.scrolls')) {
          fs.appendFileSync(gitignorePath, gitignoreEntry);
          console.log(pc.gray(`🔒 Automagically appended '.scrolls' to your .gitignore`));
        }
      } else {
        fs.writeFileSync(gitignorePath, 'node_modules\n' + gitignoreEntry);
        console.log(pc.gray(`🔒 Automagically created .gitignore and sealed it with '.scrolls'`));
      }

      console.log(gradient.passion('\n 🦊 All done! View your scrolls and begin your mission! \n'));

      // Try opening the first guide if available
      const entryNotePath = path.join(destPath, 'guides', '00-problem-solving-flow.md');
      if (fs.existsSync(entryNotePath)) {
        exec(`code "${entryNotePath}"`, (err) => {
          console.log(pc.yellow(`💡 Tip: Press Ctrl+Shift+V (Windows/Linux) or Cmd+Shift+V (Mac) in VS Code to open Markdown Preview!`));
        });
      } else {
        exec(`code "${destPath}"`);
      }

    } catch (err) {
      if (err.name === 'ExitPromptError') {
         console.log(pc.red('\nSummoning jutsu aborted.'));
         process.exit(0);
      }
      console.error(pc.red(`\n❌ Failed to summon scrolls: ${err.message}`));
    }
  });

// Handle default execution (just `bijuu`)
if (process.argv.length === 2) {
  process.argv.push('summon');
}

program.parse(process.argv);
