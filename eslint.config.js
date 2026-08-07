import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'coverage']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      // Mantém o Prettier por último para desativar regras de formatação conflitantes.
      prettier,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    // Código vendorizado pelo CLI do shadcn/ui: mantido igual ao upstream para
    // permitir `shadcn add --overwrite` limpo. As duas regras abaixo conflitam
    // com convenções da própria lib (export de variants/hooks junto do
    // componente; sync de estado com a instância do embla logo após criá-la),
    // não indicam bug real neste código gerado.
    files: ['src/components/ui/**/*.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
])
