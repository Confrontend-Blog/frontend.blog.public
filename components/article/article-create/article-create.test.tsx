import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ArticleManagementCreate } from "./article-create";

jest.mock("@confrontend/ui-library", () => ({
  CuiButton: ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick: () => void;
  }) => <button onClick={onClick}>{children}</button>,
}));

describe("ArticleManagementCreate", () => {
  const cancelCb = jest.fn();

  beforeEach(() => {
    cancelCb.mockClear();
  });

  it("should call cancel callback when Cancel button is clicked", () => {
    render(<ArticleManagementCreate cancelCb={cancelCb} />);
    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);
    expect(cancelCb).toHaveBeenCalledTimes(1);
  });

  it.todo("should call backend when Create button is clicked", () => {
    render(<ArticleManagementCreate cancelCb={cancelCb} />);
    const createButton = screen.getByText("Create");
    fireEvent.click(createButton);
    // expect(onCreatePost).toHaveBeenCalledTimes(1);
  });
});
