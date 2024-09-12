# Sales AI MVP - Monorepo

## Overview

Sales AI MVP is a B2B marketplace platform that leverages AI to connect vendors, introducers, and buyers. This project includes a client-side application using React/Next.js with Redux for state management, and a server-side API built with Node.js, Express, MongoDB, and Redis. Both parts of the application are organized using a monorepo structure.

---

## Development Environment Setup

### 1. Install Visual Studio Code (VS Code)
- **Download**: https://code.visualstudio.com/
- **Purpose**: Used for writing and editing code.

### 2. Install Node.js and npm
- **Download**: https://nodejs.org/
- **Version**: LTS (Long-Term Support).
- **Purpose**: Node.js runs server-side code; npm manages dependencies.

### 3. Install Git
- **Download**: https://git-scm.com/downloads
- **Purpose**: Version control system for tracking code changes.

---

## Project Initialization

### 1. GitHub Repository Setup

- **Repository Name**: `sales-ai-mvp`
- **Description**: "AI-driven B2B marketplace connecting vendors, introducers, and buyers"
- **Branch Strategy**: Implemented GitHub Flow.

### 2. Monorepo Structure

- **Lerna**: Monorepo tool used to manage the project structure.
- **Packages**:
  - `client/`: Frontend (Next.js + React)
  - `server/`: Backend (Node.js + Express)
  - `shared/`: Shared modules between client and server.
  
