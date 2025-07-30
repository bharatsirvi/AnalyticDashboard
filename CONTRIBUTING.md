# Contributing to ADmyBRAND Insights

Thank you for your interest in contributing to ADmyBRAND Insights! We welcome contributions from the community and are pleased to have you on board.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm
- Git

### Setting up the Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/admybrand-insights.git
   cd admybrand-insights
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Guidelines

### Code Style

- **TypeScript**: All new code should be written in TypeScript
- **ESLint**: Follow the existing ESLint configuration
- **Prettier**: Code formatting is handled automatically
- **Components**: Use functional components with hooks
- **Styling**: Use Tailwind CSS for styling

### Component Guidelines

- Place reusable components in `/src/components/`
- Use TypeScript interfaces for prop types
- Include proper JSDoc comments for complex functions
- Follow the existing naming conventions
- Ensure components are responsive and accessible

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - A new feature
- `fix:` - A bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add export functionality to data table
fix: resolve theme toggle issue on mobile
docs: update README with new features
```

## 🧪 Testing

Before submitting a pull request:

1. **Run the linter**:
   ```bash
   npm run lint
   ```

2. **Check TypeScript compilation**:
   ```bash
   npm run type-check
   ```

3. **Test the build**:
   ```bash
   npm run build
   ```

## 📋 Pull Request Process

1. **Update documentation** if necessary
2. **Test your changes** thoroughly
3. **Ensure your code follows** the existing style
4. **Create a pull request** with:
   - Clear title and description
   - Reference any related issues
   - Screenshots for UI changes
   - List of changes made

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] I have tested these changes locally
- [ ] I have added/updated tests as needed
- [ ] All existing tests pass

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code where necessary
- [ ] My changes generate no new warnings
```

## 🐛 Reporting Issues

When reporting issues, please include:

- **Clear title** and description
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Screenshots** if applicable
- **Environment details** (OS, browser, Node.js version)
- **Console errors** if any

## 💡 Feature Requests

We welcome feature requests! Please:

- **Check existing issues** to avoid duplicates
- **Provide detailed description** of the feature
- **Explain the use case** and benefits
- **Consider implementation complexity**

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   └── charts.tsx      # Chart components
├── lib/                # Utilities and data
└── styles/             # Global styles
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Recharts Documentation](https://recharts.org/en-US/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## 🤝 Code of Conduct

Please note that this project is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to abide by its terms.

## 📞 Questions?

If you have questions about contributing, feel free to:
- Open an issue for discussion
- Reach out to the maintainers
- Join our community discussions

Thank you for contributing to ADmyBRAND Insights! 🎉
