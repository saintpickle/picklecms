# PickleCMS

### Resources

> Inertia 2.0 is in beta, but seems to be stable enough to use
> This repo is used with sail which uses docker to give you a complete environment with working with Laravel and Svelte
> DO NOT DELETE THE .env.example, it only holds a copy of the .env needed to work that developers can modify themselves

- [Laravel11] (https://laravel.com/docs/11.x)
- [Inertia2] (https://v2.inertiajs.com/)
- [Svelte5] (https://svelte.dev/docs/svelte/overview)
- [TailwindCSS] (https://tailwindcss.com/docs/customizing-colors)
- [Vite] (https://vite.dev/guide/)

### Getting Started!

Add this alias to your .bashrc or .zshrc
> alias sail='sh $([ -f sail ] && echo sail || echo vendor/bin/sail)'

> Run this script below to get started
> This clones the repo, setups a .env file, and generates you an APP_KEY for encrypting cookies.

```bash
git clone git@github.com:saintpickle/picklecms.git
cd picklecms
cp .env.example .env
sail artisian key:generate 
```

### Commands to use inside the sail container
> See Laravel Docs for Laravel commands 
> The sail environment includes toolchains such as node, bun, pnpm, npm
> So you can run these commands using sail [toolchain here] 
> WARNING: These are examples to run, not a script

```bash
sail artisan make:controller MyController
sail pnpm install
sail composer install
```