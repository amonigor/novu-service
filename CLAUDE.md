# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Express service that triggers Novu notification workflows. Single-endpoint API (`POST /trigger`) that accepts subscriber info and payload, then calls the Novu API.

## Commands

- `pnpm dev` — start dev server with file watching (tsx watch)
- `pnpm start` — start server without watch mode

## Environment

Requires a `.env` file with:
- `NOVU_SECRET_KEY` — Novu API secret key
- `PORT` — server port (defaults to 3000)

## Tech Stack

- **Runtime**: Node.js with ESM (`"type": "module"`)
- **Language**: TypeScript (strict mode, ES2022 target, bundler module resolution)
- **Framework**: Express 4
- **Novu SDK**: `@novu/api` v3
- **Dev tooling**: tsx (TypeScript execution), pnpm

## API Testing

Bruno collection in `bruno-collection/` with three request variants (custom subscriber, default subscriber, payload-only) and a local environment config.
