# React Functional Components (FC)

## Стадии рендеринга функциональных компонентов

- Начальный рендеринг - Component Mount
- Повторный рендеринг - Component Update, Component Unmount

## Причины повторного рендеринга функциональных компонентов

1. Повторный рендеринг родительского компонента;
2. Изменение состояния компонента;
3. Изменение состояния внутри хука (пользовательский хук);
4. Изменение контекста;

Изменение пропсов (Props) компонента не вызывает повторный рендеринг компонента!