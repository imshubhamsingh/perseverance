import { testComponent, render } from "test-utils";
import Header from "../Header";

testComponent('Header', () => {
    it('Checking Header Info', () => {
        const { getByText } = render(<Header />);
        expect(getByText('PERSEVERANCE')).toBeInTheDocument()
        expect(getByText('Gallery')).toBeInTheDocument()
    })
})