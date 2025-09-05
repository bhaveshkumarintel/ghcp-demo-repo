# GitHub Copilot Instructions

## Repository Overview

This is a **GitHub Skills learning repository** for the "Code with GitHub Copilot" course. It is an educational tutorial repository, not a production application. The repository teaches users how to effectively use GitHub Copilot through a series of progressive, hands-on exercises.

**Repository Type**: Educational/Tutorial  
**Primary Language**: JavaScript (Node.js)  
**Size**: Small (~10 files)  
**Target Runtime**: Node.js v20+  
**Framework**: Express.js (for web server exercise only)

## Build and Runtime Instructions

### Prerequisites
- **Node.js**: v20+ (v20.19.4 confirmed working)
- **npm**: v10+ (v10.8.2 confirmed working)
- **No build tools required** - this is a simple JavaScript tutorial repository

### Running Individual Files
Most files in this repository are standalone JavaScript functions that can be executed directly:

```bash
node skills.js        # Runs without output (defines function only)
node member.js        # Runs without output (defines function only)
```

These files define functions but don't execute them. They are designed for educational purposes to demonstrate Copilot functionality.

### Running the Express Server (comments.js)
The `comments.js` file contains an Express.js web server that requires setup:

**ALWAYS run these commands in sequence:**
1. `npm init -y` (creates package.json)
2. `npm install express` (installs Express dependency)
3. `echo '[]' > comments.json` (creates required data file)
4. `node comments.js` (starts server on http://localhost:3000)

**Expected behavior**: Server starts and logs "Server is listening on http://localhost:3000"

**Dependencies**: The Express server requires manual dependency installation - there is no pre-existing package.json by design.

### No Build, Test, or Lint Process
This repository intentionally has:
- **No package.json** (by default)
- **No testing framework**
- **No linting configuration** 
- **No build process**
- **No CI/CD pipeline for code quality**

Do not add these unless specifically required for a task.

## Project Architecture and Layout

### Core Learning Files
```
├── skills.js          # Simple function: calculateNumbers(var1, var2)
├── member.js          # Simple function: skillsMember()
├── comments.js        # Express.js web server with REST API
```

### Configuration and Setup
```
├── .devcontainer/
│   └── devcontainer.json    # Codespace config with Copilot extension
├── .github/
│   ├── workflows/           # Learning step validation workflows
│   │   ├── 0-welcome.yml
│   │   ├── 1-copilot-extension.yml
│   │   ├── 2-skills-javascript.yml
│   │   ├── 3-copilot-hub.yml
│   │   └── 4-copilot-comment.yml
│   ├── steps/              # Learning content for each step
│   │   ├── -step.txt       # Current step number (4 = completed)
│   │   └── [0-4, X]-*.md   # Step instructions
│   └── dependabot.yml     # Dependency updates for Actions
├── README.md              # Current learning instructions
└── .gitignore            # Standard exclusions
```

### Step-Based Learning System
The repository uses a unique step progression system:
- **Current step tracked** in `.github/steps/-step.txt` (currently "4")
- **GitHub Actions workflows** validate student progress
- **Each workflow triggers** when specific files are modified
- **README.md content updates** automatically based on step completion

### Validation Workflows
The GitHub Actions workflows serve as **learning validators**, not CI/CD:

1. **0-welcome.yml**: Triggers on repository creation
2. **1-copilot-extension.yml**: Validates `.devcontainer/devcontainer.json` contains `GitHub\.copilot`
3. **2-skills-javascript.yml**: Validates `skills.js` contains `function calculateNumbers`
4. **3-copilot-hub.yml**: Validates `member.js` contains `skillsMember`
5. **4-copilot-comment.yml**: Validates `comments.js` contains `Create web server`

**Important**: These workflows are educational validators, not build/test pipelines. Do not modify them unless specifically instructed.

### Dependencies and Constraints
- **No production dependencies** by default
- **Express.js required** only for comments.js server exercise
- **GitHub Copilot extension** configured in devcontainer
- **Step progression system** must not be disrupted

### Key Behavioral Notes
- **Files define functions** but don't execute them automatically
- **Repository is in completed state** (step 4/X)
- **Educational flow** should be preserved when making changes
- **Minimal dependencies** approach is intentional
- **Manual setup** for Express server is part of the learning experience

### Making Changes Safely
When modifying this repository:

1. **Preserve educational intent** - this is a learning tool
2. **Avoid complex build systems** - keep it simple for learners
3. **Don't break step validation** - workflows check specific content
4. **Test with minimal setup** - use only Node.js and npm
5. **Maintain backward compatibility** with existing learning flow

### Debugging Common Issues
- **"Cannot find module 'express'"**: Run `npm install express` first
- **"No such file 'comments.json'"**: Create with `echo '[]' > comments.json`
- **Workflow failures**: Check if required content exists in target files
- **Step progression stuck**: Verify `-step.txt` contains correct number

Trust these instructions and only search for additional information if specific details are missing or found to be incorrect.