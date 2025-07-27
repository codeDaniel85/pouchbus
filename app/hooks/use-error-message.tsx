import { useState } from "react";

export function useErrorMessage() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const showError = (message: string) => {
        setErrorMessage(message);
    };

    const clearError = () => {
        setErrorMessage(null);
    };

    const validateRequired = (value: string | null | undefined, fieldName: string): boolean => {
        if (!value || value.trim() === "") {
            showError(`${fieldName}을(를) 입력해주세요.`);
            return false;
        }
        return true;
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError("올바른 이메일 형식을 입력해주세요.");
            return false;
        }
        return true;
    };

    const validatePassword = (password: string): boolean => {
        if (password.length < 8) {
            showError("비밀번호는 8자 이상이어야 합니다.");
            return false;
        }
        return true;
    };

    const validatePhoneNumber = (phoneNumber: string): boolean => {
        const phoneRegex = /^[0-9-]+$/;
        if (!phoneRegex.test(phoneNumber) || phoneNumber.length < 10) {
            showError("올바른 전화번호 형식을 입력해주세요.");
            return false;
        }
        return true;
    };

    return {
        errorMessage,
        showError,
        clearError,
        validateRequired,
        validateEmail,
        validatePassword,
        validatePhoneNumber,
    };
} 