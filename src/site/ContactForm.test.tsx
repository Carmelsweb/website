import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ContactForm } from "./ContactForm";
import { renderWithProviders } from "../test/test-utils";

describe("ContactForm", () => {
  it("hydrates fields from saved draft", () => {
    localStorage.setItem(
      "wcc-contact-draft",
      JSON.stringify({
        name: "Carmel",
        contact: "westcoastcelebrants@gmail.com",
        type: "Legal Wedding",
        date: "2026-03-01",
        message: "Hello there",
      })
    );

    renderWithProviders(<ContactForm />);

    expect(screen.getByLabelText("Your name")).toHaveValue("Carmel");
    expect(screen.getByLabelText("Email or phone")).toHaveValue(
      "westcoastcelebrants@gmail.com"
    );
    expect(screen.getByLabelText("Ceremony type")).toHaveValue("Legal Wedding");
    expect(screen.getByLabelText("Preferred date")).toHaveValue("2026-03-01");
    expect(screen.getByLabelText("Message")).toHaveValue("Hello there");
  });

  it("updates local storage when fields change", () => {
    renderWithProviders(<ContactForm />);

    fireEvent.change(screen.getByLabelText("Your name"), {
      target: { value: "Updated Name" },
    });

    const stored = JSON.parse(localStorage.getItem("wcc-contact-draft") ?? "{}");
    expect(stored.name).toBe("Updated Name");
  });

  it("ignores honeypot submissions", () => {
    const { container } = renderWithProviders(<ContactForm />);

    const company = container.querySelector('input[name="company"]') as HTMLInputElement;
    company.value = "bot";

    const form = container.querySelector("form") as HTMLFormElement;
    fireEvent.submit(form);

    expect(screen.getByRole("button", { name: /send enquiry/i })).toBeInTheDocument();
    expect(screen.queryByText(/Thanks!/i)).not.toBeInTheDocument();
  });
});
