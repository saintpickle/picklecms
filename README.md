# PickleCMS

PickleCMS is a powerful content management system utilizing Laravel v12, React v19, Shadcn/ui, and Inertia 2.0 to deliver a seamless developer experience. 

### Resources

> **Important Notes:**

> You will need to install a php and laravel.

- [Laravel 12 Documentation](https://laravel.com/docs/12.x)
- [Inertia 2.0 Documentation](https://inertiajs.com/)
- [React 19 Documentation](https://react.dev/learn)
- [TailwindCSS Documentation](https://tailwindcss.com/docs/)
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
