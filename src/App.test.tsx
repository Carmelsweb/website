import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import App from "./App";

describe("App routing", () => {
  beforeEach(() => {
    localStorage.clear();
    window.history.pushState({}, "Test", "/");
  });

  it("renders the home page on root", async () => {
    render(<App />);

    expect(
      await screen.findByRole("heading", { name: /Ceremonies crafted with heart/i })
    ).toBeInTheDocument();
  });

  it("renders the not found page for unknown routes", async () => {
    window.history.pushState({}, "Test", "/missing-route");

    render(<App />);

    expect(
      await screen.findByRole("heading", { name: /Page not found/i })
    ).toBeInTheDocument();
  });
});
