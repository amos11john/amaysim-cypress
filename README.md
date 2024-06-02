## :computer: Dependencies
> Node.js
- `Windows`
- Step 1: Download the Node.js Installer
    - Open your web browser and go to the official Node.js download page.

    - You will see two versions available: the LTS (Long Term Support) version and the Current version. The LTS version is recommended for most users, as it is more stable. Click on the Windows Installer (.msi) file to download it.

- Step 2: Install Node.js
    - Once the installer is downloaded, run the .msi file. This will open the Node.js Setup wizard.

    - In the Setup wizard, click Next to proceed.

    - Read the license agreement, and if you agree, select the checkbox to accept the terms and click Next.

    - Choose the destination folder where you want Node.js to be installed. The default location is usually fine, so click Next.

    - The wizard will then ask you to select the components to install. By default, all necessary components are selected. Ensure that "Add to PATH" is checked. Click Next.

    - On the Tools for Native Modules page, click Next. This will install additional tools required to compile and install native add-ons from npm.

    - Click Install to start the installation. You may need to grant permission for the installation to proceed.

    - Once the installation is complete, click Finish to exit the Setup wizard.

- Step 3: Verify Installation
    - To verify that Node.js and npm (Node Package Manager) were installed correctly:

    - Open a new Command Prompt window (you can search for "cmd" or "Command Prompt" in the Start menu).

    - Type the following command to check the installed version of Node.js:

```sh
node -v
```


This command should display the version number of Node.js, confirming that it is installed.

Next, check the installed version of npm by running:

```sh
npm -v
```
This command should display the version number of npm, confirming that it is installed.

- Step 4: Update npm (Optional)
    - The npm version installed with Node.js might not be the latest version. To update npm to the latest version, run the following command in the Command Prompt:

```sh
npm install -g npm
```
This command installs the latest version of npm globally on your system.

<br>

- `Mac`
- Step 1: Go to the official Node.js download page: Node.js Downloads.

- Step 2: Choose the macOS Installer:
    - Download the macOS Installer (.pkg file) for either the LTS (Long Term Support) version or the Current version. The LTS version is recommended for most users.

- Step 3: Run the Installer:
    - Open the downloaded .pkg file and follow the prompts to install Node.js.

- Step 4: Verify Installation:
    - Open Terminal and check the versions of Node.js and npm:
```sh
node -v
npm -v
```

<br>

## :open_file_folder: Clonging Repo
> Mac
- Step 1: Open Terminal: You can open Terminal from your Applications folder or by searching for it in Spotlight.

- Step 2: Navigate to the Directory Where You Want to Clone the Repository: Use the cd command to change the directory. For example, if you want to clone the repository to your Desktop, you can use:

```sh
cd ~/Desktop
```

- Step 3: Copy the Repository URL:

- HTTPS: https://github.com/amos11john/amaysim-cypress.git
- SSH: git@github.com:amos11john/amaysim-cypress.git
- Step 4: Clone the Repository: Use the git clone command followed by the copied URL. For example:

For HTTPS:

```sh
git clone https://github.com/amos11john/amaysim-cypress.git
```

For SSH (if you have set up SSH keys):

```sh
git clone git@github.com:amos11john/amaysim-cypress.git
```

- Step 5: Navigate into the Cloned Repository: After cloning, you need to navigate into the repository directory:

```sh
cd repository
```

> Windows
- Step 1: Open Git Bash
    - Open the Start menu, type Git Bash, and press Enter. Git Bash provides a Unix-like shell that can be used to interact with your Git repositories.
- Step 2: Navigate to the Directory Where You Want to Clone the Repository
    - Use the cd command to change the directory. For example, if you want to clone the repository to your Documents folder, you can use:
```sh
cd ~/Documents
```
- Step 3: Copy the Repository URL
    -  Go to the GitHub repository page you want to clone.
    - Click the Code button and copy the URL from the HTTPS or SSH tab. The URL will look something like this:
        - HTTPS: https://github.com/amos11john/amaysim-cypress.git
        - SSH: git@github.com:amos11john/amaysim-cypress.git
- Step 4: Clone the Repository
    - Use the git clone command followed by the copied URL. For example:
    - For HTTPS
```sh
git clone https://github.com/amos11john/amaysim-cypress.git
```
- For SSH (if you have set up SSH keys):
```sh
clone git@github.com:amos11john/amaysim-cypress.git
```

- Step 5: Navigate into the Cloned Repository
- After cloning, navigate into the repository directory:
```sh
cd repository
```