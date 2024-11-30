import { render, screen, fireEvent } from '@testing-library/react';
import ContactSection from '../../../components/sections/ContactSection';
import {vi} from "vitest";

describe("Contact section test", () => {
    beforeEach(() => {
        window.alert = vi.fn();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('renders the contact form', () => {
        render(<ContactSection />);
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
    });

    it('submits the form with valid inputs', () => {
        render(<ContactSection />);
        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Tony Stark' } });
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'stark@example.com' } });
        fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello!' } });
        fireEvent.click(screen.getByRole('button', { name: /send/i }));
        expect(window.alert).toHaveBeenCalledWith('Pesan berhasil dikirim ke email saya');
    });

    it('does not submit the form with empty inputs', () => {
        render(<ContactSection />);
        fireEvent.click(screen.getByRole('button', { name: /send/i }));
        expect(window.alert).not.toHaveBeenCalled();
    });

    it('shows validation errors for invalid email', () => {
        render(<ContactSection />);
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'invalid-email' } });
        fireEvent.click(screen.getByRole('button', { name: /send/i }));
        expect(screen.getByLabelText(/email/i)).toBeInvalid();
    });
})