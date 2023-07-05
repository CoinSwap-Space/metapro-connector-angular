# metapro-connector-angular

This is an example project demonstrating the usage of metapro wallet with Angular.

## Getting Started

### Prerequisites

Before you can run this project, you need to have the Angular CLI installed. If you haven't installed it already, please follow the instructions below:

1. Open your command-line interface (CLI).

2. Install Node.js by visiting the [official website](https://nodejs.org/) and downloading the installer for your operating system. Follow the installation instructions provided.

3. Verify that Node.js and npm (Node Package Manager) are installed by running the following commands in your CLI:

   ```shell
   node --version
   npm --version
   ```
   You should see the version numbers of Node.js and npm printed in the output.
   
4. Install the Angular CLI globally by running the following command in your CLI:
   ```shell
   npm install -g @angular/cli

### Installation

1. Clone this repository to your local machine:
   ```shell
   git clone https://github.com/your-username/your-repo.git
2. Change to the project's root directory:
   ```shell
   cd your-repo
3. Install the project dependencies:
   ```shell
   npm install

### Usage
1. Start the development server by running the following command in the project's root directory:
   ```shell
   npm start
   ```
   This command will build the project and start a local development server. Open your web browser and navigate to http://localhost:4200 to see the running application.
2. Click the "Connect" button to initiate the connection.
3. Follow the on-screen instructions to complete the connection process. A QR code will be displayed, which you can scan using a metapro wallet app.
4. Once connected, you will see the connected status and the accounts associated with the connected wallet, if available.
5. Click the "Disconnect" button to terminate the session.
