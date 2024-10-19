describe("form tests", () => {
	beforeEach(() => {
		cy.visit("/forms");
	});

	it("Test subscribe form", () => {
		cy.contains(/testing forms/i);
		cy.getDataTest("subscribe-form")
			.find("input")
			.as("subscribe-input");
		cy.get("@subscribe-input").type("ozorjijoshua@gmail.com");
		cy.contains(
			/Successfully subbed: ozorjijoshua@gmail.com/i,
		).should("not.exist");
		cy.getDataTest("subscribe-button").click();
		cy.contains(
			/Successfully subbed: ozorjijoshua@gmail.com/i,
		).should("exist");
		cy.wait(3000);
		cy.contains(
			/Successfully subbed: ozorjijoshua@gmail.com/i,
		).should("not.exist");

		cy.get("@subscribe-input").type("ozorjijoshua");
		cy.contains(/invalid email: ozorjijoshua/i).should("not.exist");
		cy.getDataTest("subscribe-button").click();
		cy.contains(/invalid email: ozorjijoshua/i).should("exist");
		cy.wait(3000);
		cy.contains(/invalid email: ozorjoshua/i).should("not.exist");
		cy.get("@subscribe-input").click();

		cy.contains(/fail!/i).should("not.exist");
		cy.getDataTest("subscribe-button").click();
		cy.contains(/fail!/i).should("exist");
	});
});
