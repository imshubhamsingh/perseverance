import { testComponent, render } from "test-utils";
import AppWrapper from "../AppWrapper";

testComponent('AppWrapper', () => {
    it('Render Children', () => {
        const { getByText } = render(<AppWrapper><p>In test</p></AppWrapper>);
        expect(getByText(/In test/g)).toBeInTheDocument()
    })
})