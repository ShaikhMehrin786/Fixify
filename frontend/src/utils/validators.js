export const validateLogin = (data) => {

    if (!data.email.trim()) {

        return "Email is required.";

    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {

        return "Please enter a valid email.";

    }

    if (!data.password.trim()) {

        return "Password is required.";

    }

    if (data.password.trim().length<8) {

        return "Password must be at least 8 characters.";

    }

    return "";

};

export const validateCustomer = (data) => {

    if (!data.full_name.trim()) {

        return "Full name is required.";

    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {

        return "Please enter a valid email.";

    }

    if (!/^[6-9]\d{9}$/.test(data.phone)) {

        return "Enter a valid phone number.";

    }

    if (data.password.trim().length < 8) {

        return "Password must be at least 8 characters.";

    }

    if (data.password.trim() !== data.confirm_password.trim()) {

        return "Passwords do not match.";

    }

    if (!data.agree) {

        return "Please accept Terms & Conditions.";

    }

    return "";

};

export const validateWorker = (data, files) => {

    if (!data.full_name.trim()) {

        return "Full name is required.";

    }

    if (!data.profession) {

        return "Please select profession.";

    }

    if (!data.category) {

        return "Please select category.";

    }

    if (!data.experience) {

        return "Please select experience.";

    }

    if (!/^\d{12}$/.test(data.aadhaar)) {

        return "Enter valid Aadhaar Number.";

    }

    if (!files.profile) {

        return "Profile photo is required.";

    }

    if (!files.idProof) {

        return "Identity proof is required.";

    }

    if (data.password.trim() !== data.confirm_password.trim()) {

        return "Passwords do not match.";

    }

    return "";

};