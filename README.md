# Tatanotes

Tatanotes is a simple note taking app built with Laravel and React.

## requirements:

- Composer version 2.8.10 2025-07-10 19:08:33
- PHP version 8.4.11 (/opt/homebrew/Cellar/php/8.4.11/bin/php)
- Bun version 1.2.19

## Installation & Running Locally (Development Mode)

1. Clone the repository
2. Copy, paste and execute this in terminal:
    - ```bash
      composer install && bun install
      ```
    - ```bash
      bun run dev
      ```

## TL:DR

- If the HMR in backend does not work, restart the development server manually. TBW
- If the HMR in frontend does not work, restart the development server manually.
- Bug in UPDATE / EDIT note CRUD functionality, need to fix it. The bug is, the note are not resetted when user click on `Reset` button.
