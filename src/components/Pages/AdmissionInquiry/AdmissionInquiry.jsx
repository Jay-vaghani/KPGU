import React, { useContext, useState } from "react";
import {
    Autocomplete,
    Box,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";
import { AppContext } from "../../../contexts/AppContext";

function AdmissionInquiry() {
    const { maxWidth } = useContext(AppContext);
    const [cityList, setCityList] =
        useState(
           ["Amreli", "Anand", "Banas Kantha", "Bharuch", "Bhavnagar", "Dohad", "Dahod", "Gandhinagar", "Jamnagar", "Junagadh", "Kachchh", "Kheda", "Mahesana", "Mehsana", "Narmada", "Navsari", "Panch Mahals", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabar Kantha", "Surat", "Surendranagar", "Tapi", "The Dangs", "Vadodara", "Valsad", "Adalaj", "Ahmadabad", "Ahwa", "Alang", "Alang-Sosiya", "Alikherva", "Amardad", "Ambaji", "Ambaliyasan", "Amboli", "Amod", "Amreli", "Anand", "Anandpar", "Andada", "Anjar", "Anklav", "Anklesvar", "Ankleshwar", "Anklesvar INA", "Antaliya", "Antarjal", "Arsodiya", "Atul", "Baben", "Babra", "Bagasara", "Bajwa", "Balasinor", "Balitha", "Baliyasan", "Bansda", "Vansda", "Bantwa", "Bantva", "Bardoli", "Bareja", "Barwala", "Bavla", "Bayad", "Bechar", "Becharaji", "Bhabhar", "Bhachau", "Bhadkodara", "Bhagal", "Jagana", "Bhagdawada", "Bhalpara", "Bhanvad", "Bharthana Kosad", "Bharuch", "Bharuch INA", "Bhat", "Bhavnagar", "Bhayavadar", "Bhilad", "Bhiloda", "Bholav", "Bhuj", "Bhurivel", "Bilimora", "Bilimora", "Talodh", "Bodeli", "Bopal", "Boriavi", "Borsad", "Botad", "Chaklasi", "Chalala", "Chalthan", "Chanasma", "Chandrapur", "Chanod", "Chhapi", "Chhapra", "Chhatral", "Chhatral INA", "Chhaya", "Chhiri", "Chhota Udaipur", "Chikhli", "Chiloda", "Naroda", "Chorvad", "Chotila", "Dabhoi", "Daheli", "Dakor", "Damnagar", "Dediapada", "Deesa", "Dehari", "Dehgam", "Dahegam", "Deodar", "Devgadbaria", "Devgadh Baria", "Devsar", "Dhandhuka", "Dhanera", "Dharampur", "Dhasa Vishi", "Dhola", "Dholka", "Dhoraji", "Dhrangadhra", "Dhrol", "Digvijaygram", "Dohad", "Dahod", "Dungarpur", "Dwarka", "Freelandgunj", "Gadhada", "Gadkhol", "Galpadar", "Gamdi", "Gandevi", "Gandhidham", "Gandhinagar", "Gariadhar", "Ghanteshvar", "Ghogha", "Godhra", "Gondal", "GSFC", "Motikhavdi Sikka", "GSFC Complex INA", "Hadgood", "Hajira INA", "Halol", "Halvad", "Harij", "Himatnagar", "Ichchhapor", "Idar", "Jafrabad", "Jafrabad", "Jambusar", "Jamjodhpur", "Jamnagar", "Jarod", "Jasdan", "Jawaharnagar", "Jetalsar", "Jetpur", "Jetpur Navagadh", "Jhadeshwar", "Jhalod", "Junagadh", "Kabilpor", "Kadi", "Kadodara", "Kakoshi", "Kalavad", "Kaliawadi", "Kalol", "Kandla", "Kanjari", "Kanodar", "Kansad", "Kapadvanj", "Karachiya", "Karamsad", "Karjan", "Karvad", "Kathlal", "Katpar", "Kavant", "Keshod", "Kevadiya", "Khambhalia", "Jamkhambhaliya", "Khambhat", "Khapat", "Kharach", "Kharaghoda", "Kheda", "Khedbrahma", "Kheralu", "Kim", "Kodinar", "Kosamba", "Kotharia", "Kutiyana", "Lathi", "Lavachha", "Lilia", "Limbdi", "Limkheda", "Limla", "Lodhika", "Lunawada", "Lunavada", "Madhapar", "Magdalla", "Mahendranagar", "Mahesana", "Mehsana", "Mahudha", "Mahuva", "Mahuvar", "Maktampur", "Malanka", "Maliya", "Malpur", "Manavadar", "Mandvi", "Mandvi", "Mangrol", "Mankuva", "Mansa", "Meghraj", "Mehmedabad", "Mirjhapar", "Mithapur", "Modasa", "Mora", "Morvi", "Morbi", "Mundra", "Nadiad", "Nanakwada (Nanakvada)", "Nandej", "Nandelav", "Nandesari", "Nandesari INA", "Nari", "Nasvadi", "Nava Bhildi", "Navsari", "Ode", "Okha", "Orvad", "Paddhari", "Padra", "Palaj", "Palanpur", "Palej", "Palitana", "Panoli", "Parabada", "Pardi", "Pardi Kanade", "Pardi Parnera", "Pardi Sondhpur", "Parnera", "Patan", "Patdi", "Pethapur", "Petlad", "Petro-Chemical Complex INA", "Porbandar", "Por-Ramangamdi", "Prantij", "Radhanpur", "Rajkot", "Rajpipla", "Rajula", "Ranavav", "Ranoli", "Ranpur", "Rapar", "Raval", "Ravapara", "Reliance Complex", "Sachin", "Sachin INA", "Sagbara", "Saij", "Saktasanala", "Salaya", "Salvav", "Sanand", "Sanjali", "Sanjan", "Sanjeli", "Santrampur", "Saputara", "Sarangpore", "Sarigam", "Sarigam INA", "Sathamba", "Savarkundla", "Savgadh", "Savli", "Sayan", "Selamba", "Shaktinagar", "Shapur", "Shehera", "Sherpura", "Sidhpur", "Sidsar", "Sihor", "Sikka", "Singarva", "Sojitra", "Solsumba", "Songadh", "Songadh", "Sukhpar", "Surat", "Surendranagar", "Dudhrej", "Dudhrej", "Sutrapada", "Talaja", "Talala", "Talod", "Tarsadi", "Tarsali", "Thangadh", "Thara", "Tharad", "Thasra", "Trajpar", "Ukai", "Umbergaon", "Umbergaon INA", "Umrala", "Umreth", "Una", "Undera", "Unjha", "Upleta", "Vadali", "Vadnagar", "Vadodara", "Vaghodia", "Waghodia", "Valia-Jhagadia", "Valia-Naldhari", "Vallabhipur", "Vallabhi", "Vallabh Vidyanagar", "Vallabh Vidhyanagar", "Valsad", "Valsad INA", "Vanthali", "Vapi", "Vapi INA", "Vareli", "Vartej", "Vasna Borsad INA", "Vavdi Bujarg", "Vavol", "Veraval", "Veraval", "Vijalpor", "Vijapur", "Vijaynagar", "Viramgam", "Virpur", "Visavadar", "Visnagar", "Vithal Udyognagar INA", "Vyara", "Wadhwan", "Waghai", "Wankaner", ]
        )

    const [state, setState] = useState("Gujarat")


    const year = new Date().getFullYear();

    const StudentCategory = ["OPEN", "SEBC", "SC/ST", "OTHER"];

    const State = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Andaman And Nicobar",
        "Chandigarh",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Dadra and Nagar Haveli And Daman & Diu",
        "Delhi",
        "Jammu & Kashmir",
        "Ladakh",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Lakshadweep",
        "Puducherry",
    ];



    const handelStateSelect = (value) => {
        if (value.target.value === "Gujarat") {
            setCityList(
                ["Other", "Deesa", "Porbandar", "Surat", "Jamnagar", "Navsari", "Mehsana", "Gandhinagar", "Valsad", "Bharuch", "Morbi", "Gandhidham", "Godhra", "Nadiad", "Bhuj", "", "Veraval", "Anand", "Gondal", "Jetpur", "Kalol", "Viramgam", "Chhota Udepur", "Rapar", "Sihor", "Dhandhuka", "Vallabhipur", "Upleta", "Khambhalia", "Vyara", "Ahwa", "Lunawada", "Halvad", "Kadi", "Dholka", "Jambusar", "Mangrol", "Wadhwan", "Jamjodhpur", "Limbdi", "Rajula", "Vartej", "Amod", "Babra", "Una", "Petlad", "Kapadvanj", "Savar Kundla", "Songadh", "Vadali", "Bhabhar", "Talala"]
            )
        }
        if (value.target.value === "Andaman And Nicobar") {
            setCityList(
                ["Tamaloo", "Kimois", "Tee Top", "Kinyuka", "Kakana", "Small Lapathy", "Trinket Bay", "Patisang", "Pitayo", "Lawful", "Great Nicobar", "Alexandra River", "Bewai/Kuwak", "Japan Tikri", "Pattia", "Shompen Village-B", "Upper Katchal", "Chongkamong", "Tahaila", "Katahu", "Lanaya", "Meenakshi Ram Nagar", "Manglutan", "Tusnabad", "Bombooflat", "Govind Nagar", "Kadamtala", "Shibpur RV", "Kakana", "Afra Bay", "Khudirampur", "Malacca", "7 km Farm", "Anul", "Pulobaha", "Makhahu", "Vijoy Nagar", "Kokeon", "V Pulloullo", "Shompen Village-A", "Shompen hut", "Joginder Nagar", "Great Nicobar", "Pulopanja", "Chingen", "Campbell Bay", "Laxmi Nagar", "Arong", "Kinmai", "Big Lapathy", "Perka", "IAF Camp", "Tapoiming"]
            )
        }
    }




    return (
        <>
            <Box
                maxWidth={maxWidth}
                mx={"auto"}
                px={"3%"}
                py={"2%"}
                bgcolor={"#fff"}
                borderRadius={4}
                className="smooth-shadow"
                mt={4}
            >
                <h1 className="mb-0 fw-bold color-secondary">
                    ADMISSION INQUIRY FOR YEAR{" "}
                    <Typography
                        variant="caption"
                        fontSize={"inherit"}
                        fontWeight={"inherit"}
                    >
                        {year}-{year + 1}
                    </Typography>
                </h1>
            </Box>
            <Box
                maxWidth={maxWidth}
                mx={"auto"}
                px={"3%"}
                py={"2%"}
                bgcolor={"#fff"}
                borderRadius={4}
                className="smooth-shadow"
                mt={4}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <TextField
                                color="secondary"
                                fullWidth
                                label="Name"
                                variant="filled"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <TextField
                                color="secondary"
                                fullWidth
                                label="Email ID"
                                variant="filled"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <TextField
                                color="secondary"
                                fullWidth
                                label="Contact No"
                                variant="filled"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <TextField
                                color="secondary"
                                fullWidth
                                label="Student Category"
                                select
                                variant="filled"
                            >
                                {StudentCategory.map((category, index) => (
                                    <MenuItem value={category} key={index}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Autocomplete
                                fullWidth
                                onSelect={handelStateSelect}
                                defaultValue={state}
                                value={state}
                                options={State}
                                renderInput={(params) => <TextField {...params} variant="filled" color="secondary" label="Select State" />}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Autocomplete
                                fullWidth
                                options={cityList}

                                renderInput={(params) => <TextField {...params} variant="filled" color="secondary" label="Select City" />}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default AdmissionInquiry;

