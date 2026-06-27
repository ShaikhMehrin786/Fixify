import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaUser,
    FaEnvelope,
    FaPhoneAlt,
    FaTools,
    FaBriefcase,
    FaMapMarkerAlt,
    FaIdCard,
    FaLock,
    FaEye,
    FaEyeSlash
} from "react-icons/fa";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthHeader from "../../components/auth/AuthHeader";
import InputField from "../../components/auth/InputField";
import GradientButton from "../../components/auth/GradientButton";
import SelectField from "../../components/auth/SelectField";
import "../../assets/css/auth.css";
import "../../assets/css/worker-register.css";
import FileUpload from "../../components/auth/FileUpload";
import ProgressStepper from "../../components/auth/ProgressStepper";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/common/Loader";
import authService from "../../services/authService";
import { validateWorker } from "../../utils/validators";

function WorkerRegister() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        profession: "",
        category: "",
        experience: "",
        address: "",
        city: "",
        aadhaar: "",
        password: "",
        confirm_password: "",
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        setError("");

        const message = validateWorker(formData, files);

        if (message) {

            setError(message);

            setLoading(false);

            return;

        }

        try {

            const payload = new FormData();

            payload.append("full_name", formData.full_name);
            payload.append("email", formData.email);
            payload.append("phone", formData.phone);
            payload.append("profession", formData.profession);
            payload.append("category", formData.category);
            payload.append("experience", formData.experience);
            payload.append("address", formData.address);
            payload.append("city", formData.city);
            payload.append("aadhaar", formData.aadhaar);
            payload.append("password", formData.password);
            payload.append("confirm_password", formData.confirm_password);

            payload.append("profile", files.profile);
            payload.append("idProof", files.idProof);

            await authService.registerWorker(payload);
            toast.success("Registration Submitted Successfully!");
            navigate("/login");

        }

        catch (error) {

            setError(

                error.response?.data?.detail ||

                "Registration failed."

            );

        }

        finally {

            setLoading(false);

        }

    };
    const [files,setFiles]=useState({

      profile:null,

      idProof:null

  });

  const handleFile=(e)=>{

      setFiles({

          ...files,

          [e.target.name]:e.target.files[0]

      });

  };
    const [step,setStep]=useState(1);

    const nextStep=()=>{

        setStep(step+1);

    }

    const prevStep=()=>{

        setStep(step-1);

    };
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");
    
    return (
        <AuthLayout>

            <div className="worker-register-card">

                <AuthHeader
                  title="Become a Service Professional"
                  subtitle="Join Fixify and start receiving service requests."
                />

                <ProgressStepper step={step} />

                <form
                    className="worker-form"
                    onSubmit={handleSubmit}
                >
                {
                  error &&

                  <div className="auth-error">

                      {error}

                  </div>
              }
                {step === 1 && (
                  <>

                      <InputField
                          label="Full Name"
                          icon={<FaUser />}
                          name="full_name"
                          placeholder="Enter your full name"
                          value={formData.full_name}
                          onChange={handleChange}
                      />

                      <InputField
                          label="Email"
                          icon={<FaEnvelope />}
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                      />

                      <InputField
                          label="Phone Number"
                          icon={<FaPhoneAlt />}
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                      />

                  </>
              )}
              {step === 2 && (
                <>

                    <SelectField
                        label="Profession"
                        icon={<FaTools />}
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        placeholder="Choose Profession"
                        options={[
                            "Electrician",
                            "Plumber",
                            "Carpenter",
                            "Painter",
                            "Cleaner",
                            "AC Technician",
                            "Appliance Repair",
                            "Pest Control",
                            "Home Shifting"
                        ]}
                    />

                    <SelectField
                        label="Service Category"
                        icon={<FaBriefcase />}
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Choose Category"
                        options={[
                            "Electrical",
                            "Plumbing",
                            "Cleaning",
                            "Painting",
                            "Carpentry",
                            "Appliance Services",
                            "Home Maintenance"
                        ]}
                    />

                    <SelectField
                        label="Experience"
                        icon={<FaBriefcase />}
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="Choose Experience"
                        options={[
                            "Fresher",
                            "1-2 Years",
                            "3-5 Years",
                            "5-10 Years",
                            "10+ Years"
                        ]}
                    />

                    <InputField
                        label="Address"
                        icon={<FaMapMarkerAlt />}
                        name="address"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleChange}
                    />

                    <InputField
                        label="City"
                        icon={<FaMapMarkerAlt />}
                        name="city"
                        placeholder="Ahmedabad"
                        value={formData.city}
                        onChange={handleChange}
                    />

                </>
            )}
            {step === 3 && (
              <>

                  <InputField
                      label="Aadhaar Number"
                      icon={<FaIdCard />}
                      name="aadhaar"
                      placeholder="XXXX XXXX XXXX"
                      value={formData.aadhaar}
                      onChange={handleChange}
                  />

                  <FileUpload
                      label="Profile Photo"
                      name="profile"
                      accept="image/*"
                      preview={true}
                      onChange={handleFile}
                  />

                  <FileUpload
                      label="Identity Proof"
                      name="idProof"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFile}
                  />

                  <InputField
                      label="Password"
                      icon={<FaLock />}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Create password"
                      value={formData.password}
                      onChange={handleChange}
                      rightIcon={showPassword ? <FaEyeSlash /> : <FaEye />}
                      onRightIconClick={() => setShowPassword(!showPassword)}
                  />

                  <InputField
                      label="Confirm Password"
                      icon={<FaLock />}
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirm_password"
                      placeholder="Confirm password"
                      value={formData.confirm_password}
                      onChange={handleChange}
                      rightIcon={showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      onRightIconClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                      }
                  />

                  <label className="terms-check">

                      <input
                          type="checkbox"
                          name="agree"
                          checked={formData.agree}
                          onChange={handleChange}
                      />

                      <span>
                          I agree to the
                          <Link to="#"> Terms </Link>
                          &
                          <Link to="#"> Privacy Policy </Link>
                      </span>

                  </label>

              </>
          )}
        </form>
        <div className="step-buttons">

          {step > 1 && (

              <button
                  type="button"
                  onClick={prevStep}
              >
                  Previous
              </button>

          )}

          {step < 3 ? (
            
              <button
                  type="button"
                  onClick={nextStep}
              >
                  Next
              </button>

          ) : (

              <GradientButton disabled={loading}>

                {

                    loading

                    ?

                    <Loader />

                    :

                    "Create Worker Account"

                }

            </GradientButton>

          )}

      </div>

      <div className="login-link">

          Already have an account?

          <Link to="/login">

              Sign In

          </Link>

      </div>
        </div>

        </AuthLayout>
    );
}

export default WorkerRegister;