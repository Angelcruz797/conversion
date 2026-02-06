import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import Footer from "../footer/Footer";

export default function Home() {
    const location = useLocation();
    const [value, setValue] = useState<string>(location.pathname);
    const navigate = useNavigate();

    const handleChange = (e: React.SyntheticEvent, newValue: string) => {
        navigate(`/${newValue}`);
        setValue(newValue);
    };

    return(
        <>  
            <div className="h-screen flex flex-col justify-between">
                <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                aria-label="convertor"
                className="bg-gray-200 w-full lg:w-fit"
                >
                    <Tab value="/" label="Home" />
                    <Tab value="/convertor/1" label="Decimal y Binario" />
                    <Tab value="/convertor/0" label="Hexacimal y Decimal" />
                    <Tab value="/convertor/2" label="Binario y Hexadecimal" />
                    <Tab value="/convertor/3" label="Octal y Decimal" />
                    <Tab value="/sum-binaria" label="Sum de Binarios" />
                </Tabs>
                <div className="p-5 h-screen overflow-auto">
                    <Outlet />     
                </div>
                <Footer />
            </div>
        </>
    )
}
