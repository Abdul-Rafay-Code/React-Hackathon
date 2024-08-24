import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Cards(props: any) {
  const { loading, data } = props;
  return (
    <>
      <h1 className="text-center m-10 text-4xl sm:text-5xl md:text-6xl font-bold">
        All Rooms
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {data?.map((item: any, index: any) => {
          return (
            <>
              <Card
                key={index}
                className="w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-md"
              >
                <div className="relative">
                  <CardMedia
                    component="img"
                    image={item?.roomImage}
                    alt="Hotel Image"
                    className="w-full h-64 sm:h-72 md:h-80 object-cover"
                    style={{ borderRadius: "0.5rem 0.5rem 0 0" }}
                  />
                  <div className="absolute top-4 right-4">
                    <IconButton
                      size="small"
                      color="warning"
                      aria-label="Add to Favorites"
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-5 md:p-6 space-y-3">
                  <div className="space-y-1">
                    <Typography
                      variant="h5"
                      component="h3"
                      className="font-semibold"
                    >
                      The Grand Hotel
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item?.roomDescription}
                    </Typography>
                  </div>
                  <div className="flex items-center justify-between">
                    <Typography
                      variant="h4"
                      component="div"
                      className="font-bold"
                    >
                      ${item?.roomPrice}
                    </Typography>
                    <Button variant="contained" size="small">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}
