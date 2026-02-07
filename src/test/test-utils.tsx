import { render } from "@testing-library/react";
import type { ReactElement } from "react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "../site/theme";

type RenderWithProvidersOptions = {
  route?: string;
};

export function renderWithProviders(
  ui: ReactElement,
  { route = "/" }: RenderWithProvidersOptions = {}
) {
  window.history.pushState({}, "Test", route);

  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
    </ThemeProvider>
  );
}
