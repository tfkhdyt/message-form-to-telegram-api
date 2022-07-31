# "Message Form to Telegram" API

REST API to send message from HTML form into Telegram Messages

## Built with

- TypeScript
- Node.js
- NestJS
- Telegraf

## Getting Started

### Prerequisites

- Node.js
- Node.js package manager (NPM, Yarn, or PNPM)
- Telegram Account

### Installation

1. Clone the repo

```git
git clone https://github.com/tfkhdyt/message-form-to-telegram-api.git
```

2. Open the project folder

```bash
cd message-form-to-telegram-api
```

3. Rename `.env.example` to `.env`

```bash
mv .env.example .env
```

4. Create a Telegram Bot (I won't teach you how, find the tutorial on Internet). And then put your bot token to `BOT_TOKEN` on `.env`.

5. Send your telegram username to this [bot](https://t.me/username_to_id_bot), copy the id and put on `ADMIN_ID` variable on `.env`

6. Instal dependencies

```npm
npm install
```

## Usage

- Run in development mode

```bash
npm run start:dev
```

- Build the project

```bash
npm run build
```

- Run in production mode (Build the project first)

```bash
npm run start
```

Check `package.json` file for more available scripts.

## Endpoint

`/message` `/POST`

Body:

- name: string
- email: string
- message: string

[Example](https://github.com/tfkhdyt/web-portfolio/blob/e75a0524175d7df014cf9560f463619eb691e0e3/src/components/Contact/Form.tsx#L24) with Axios
