import { Box, Grid } from "@mui/material";

const HomeCard:React.FC<{url: string, description: string, level: string}> = ({url, description, level}) => {


    return (
        <Grid item xs={2} sm={4} md={4}>
            <Box className="shadow-lg transition-shadow duration-300 rounded-lg hover:shadow-blue-400">
                <Box>
                    <Box
                        className="rounded-t-lg"
                        src={url}
                        component="img"
                        sx={{
                            height: 180,
                            objectFit: "cover",
                        }}
                        alt="Subject image"
                    />
                </Box>
                <Box className="p-4">
                    <Box className="font-medium mt-2">
                        Level: 
                        <span className="font-normal ml-1">{level}</span>
                    </Box>
                    <Box
                        className="mt-2 text-sm"
                        component="p"
                    >
                        {description}
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}

export default HomeCard;