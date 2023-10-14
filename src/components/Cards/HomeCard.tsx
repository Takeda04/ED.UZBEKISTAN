import { Box, Grid } from "@mui/material";

const HomeCard = () => {


    return (
        <Grid item xs={2} sm={4} md={4}>
            <Box className="shadow rounded-lg">
                <Box>
                    <Box
                        className="rounded-t-lg"
                        src="https://fs.getcourse.ru/fileservice/file/download/a/564257/sc/307/h/899975eccd05dce8ab1d8f1f010e87d6.png"
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
                        <span className="font-normal ml-1">Intermediate</span>
                    </Box>
                    <Box
                        className="mt-2 text-sm"
                        component="p"
                    >
                        At this level, the student will be able to understand and communicate in familiar situations, 
                        use a range of tenses and complex sentence structures, comprehend spoken and written English, 
                        and express themselves with a degree of fluency and accuracy.
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}

export default HomeCard;