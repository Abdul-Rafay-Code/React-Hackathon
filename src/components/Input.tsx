import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function BasicTextFields(data: any) {
  return (
    <Box
      sx={{
        marginBottom: 2,
        width: "100%",
        maxWidth: "100%",
      }}
      className="w-full"
    >
      {data?.type === "select" ? (
        <TextField
          select
          label={data?.label}
          className={data?.className}
          multiline={data?.multiline}
          rows={data?.rows}
          value={data?.value || ""}
          onChange={data?.onChange}
          id={data?.id}
          fullWidth
        >
          {data?.menuItems?.map((item: any, index: any) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </TextField>
      ) : (
        <TextField
          type={data?.type}
          label={data?.label}
          className={data?.className}
          multiline={data?.multiline}
          rows={data?.rows}
          value={data?.value || ""}
          onChange={data?.onChange}
          id={data?.id}
          fullWidth
        />
      )}
    </Box>
  );
}
