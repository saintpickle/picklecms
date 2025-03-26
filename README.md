# PickleCMS

PickleCMS is a powerful content management system utilizing Laravel, Svelte, and Inertia to deliver a seamless developer experience. 

### Resources

> **Important Notes:**
>
> - **Inertia 2.0** is currently in beta but is stable enough for use.
> - This repository uses **Laravel Sail**, which leverages Docker to create a complete development environment.
> - **Do not delete the `.env.example` file**. It contains the necessary environment configurations that developers can copy and modify as needed.
> - You will need to install **php php-xml composer** to do a composer install the first time you clone this project in order to install sail, then after that you can run sail composer for managing the project.

- [Laravel 11 Documentation](https://laravel.com/docs/11.x)
- [Inertia 2 Documentation](https://v2.inertiajs.com/)
- [Svelte 5 Documentation](https://svelte.dev/docs/svelte/overview)
- [TailwindCSS Documentation](https://tailwindcss.com/docs/customizing-colors)
- [Vite Documentation](https://vite.dev/guide/)

### Getting Started

To start, add this alias to your `.bashrc` or `.zshrc`:

```bash
alias sail='sh $([ -f sail ] && echo sail || echo vendor/bin/sail)'
```

#### Setup Script 

Follow these steps to get your project up and running:

> This script will clone the repository, set up the `.env` file, and generate an `APP_KEY` for encrypting cookies.

```bash
git clone git@github.com:saintpickle/picklecms.git
cd picklecms
cp .env.example .env
composer install
sail up -d
sail pnpm install
sail artisan key:generate
sail artisan migrate
```

## Commands to Use Inside the Sail Container
Refer to the [Laravel Documentation](https://laravel.com/docs/11.x) for detailed information on Laravel commands. The Sail environment includes various toolchains such as Node, Bun, pnpm, and npm. You can run these commands using the Sail prefix. Note: These are examples to run, not a script.

> - **Note:** These are examples of commands you can run inside the sail environment

```bash
# Create a new controller
sail artisan make:controller MyController

# Install dependencies with pnpm
sail pnpm install

# Install dependencies with composer
sail composer install
```
