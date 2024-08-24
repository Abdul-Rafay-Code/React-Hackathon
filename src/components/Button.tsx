import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BasicButtons(data: any) {
  return (
    <Stack spacing={2} direction="row">
      {data?.icon ? (
        <Button
          variant="contained"
          className={data.className}
          startIcon={data.icon}
        >
          {data.label}
        </Button>
      ) : (
        <Button
          variant={data?.variant}
          onClick={data?.onClick}
          className={data?.className}
        >
          {data?.label}
        </Button>
      )}
    </Stack>
  );
}
