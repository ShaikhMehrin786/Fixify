import { Toaster } from "react-hot-toast";

function ToastProvider() {

    return (

        <Toaster

            position="top-right"

            reverseOrder={false}

            toastOptions={{

                duration:3000,

                style:{

                    borderRadius:"12px",

                    background:"#ffffff",

                    color:"#111827",

                    fontSize:"15px",

                    padding:"16px"

                },

                success:{

                    iconTheme:{

                        primary:"#10b981",

                        secondary:"#ffffff"

                    }

                },

                error:{

                    iconTheme:{

                        primary:"#ef4444",

                        secondary:"#ffffff"

                    }

                }

            }}

        />

    );

}

export default ToastProvider;