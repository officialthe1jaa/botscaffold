# 🤖 botscaffold

![CI](https://img.shields.io/github/actions/workflow/status/YOUR_ORG/botscaffold/ci.yml?branch=main&label=CI)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D20-brightgreen)
![Release](https://img.shields.io/github/v/release/YOUR_ORG/botscaffold?include_prereleases)

A framework for quickly **scaffolding and deploying Telegram and Discord bots** —
one command generates a ready-to-run bot with polling/gateway boilerplate,
a `package.json`, and its own README.

## ✨ Features

- Generate a Telegram bot (long-polling, uses the raw Bot API + `fetch`, no deps required)
- Generate a Discord bot (gateway client, uses `discord.js`)
- Generate both at once with `--platform both`
- Each generated bot ships with `/start`, `/help`, `/echo` (Telegram) or `!ping`, `!help`, `!echo` (Discord) out of the box
- Generated bots are fully self-contained — copy the folder anywhere and deploy it

## 📦 Install

```bash
git clone https://github.com/YOUR_ORG/botscaffold.git
cd botscaffold
bash scripts/setup.sh
npm install
```

## 🚀 Usage

Scaffold a Telegram bot:

```bash
node src/botscaffold.js create --platform telegram --name mybot
cd bots/mybot/telegram
npm install
export TELEGRAM_BOT_TOKEN=123456:ABC-your-token
npm start
```

Scaffold a Discord bot:

```bash
node src/botscaffold.js create --platform discord --name mybot
cd bots/mybot/discord
npm install
export DISCORD_BOT_TOKEN=your-token
npm start
```

Scaffold both at once:

```bash
node src/botscaffold.js create --platform both --name mybot
```

List supported platforms:

```bash
node src/botscaffold.js list
```

## 🧰 npm scripts

| Script | Description |
|---|---|
| `npm start` | Run the CLI (`src/botscaffold.js`) |
| `npm test` | Run the unit tests |
| `npm run tracker` | Show achievement badge progress |
| `npm run roadmap` | Show the Day 1 → Month 1 roadmap |

## 🏆 GitHub achievement scripts

```bash
bash scripts/unlock-all.sh
bash scripts/quickdraw.sh
bash scripts/yolo.sh
bash scripts/publicist.sh
bash scripts/pull-shark.sh 16
bash scripts/pair-extraordinaire.sh "Satoshi Nakamoto" "satoshi@example.com"
```

All scripts require [`gh`](https://cli.github.com/) authenticated (`gh auth login`) and auto-detect your repo.

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## 📄 License

[MIT](LICENSE)
