import { useState } from "react";
import {
  Checkbox,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import dayjs from "dayjs";
import { Add, UnfoldLess, UnfoldMore } from "@material-ui/icons";

const camelCaseToSpaces = (str: string): string =>
  str
    // insert a space before all caps
    .replace(/([A-Z])/g, " $1")
    // uppercase the first character
    .replace(/^./, function (str) {
      return str.toUpperCase();
    });

interface Props {
  data: any;
}

const JSONViewer: React.FC<Props> = ({ data }) => {
  const [collapsed, setCollapsed] = useState<{ [key: string | number]: any }>(
    {}
  );
  const toggleCollapse = (key: any) => {
    setCollapsed((prev: any) => ({ ...prev, [key]: !prev[key] }));
  };

  const isObject = (value: any) => {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  };

  const isArray = (value: any) => {
    return Array.isArray(value);
  };

  const isBoolean = (value: any) => {
    return typeof value === "boolean";
  };

  const isDate = (value: any) => {
    if (typeof value !== "string") return false;
    return dayjs(value).isValid();
  };
  const isNumber = (value: any) => {
    return typeof value === "number";
  };

  const formatDate = (value: any) => {
    return dayjs(value).format("DD/MM/YYYY HH:mm:ss");
  };

  const renderValue = (value: any) => {
    if (isObject(value) || isArray(value)) {
      return <JSONViewer data={value} />;
    }

    if (isBoolean(value)) {
      return <Checkbox checked={value} disabled />;
    }
    if (isNumber(value)) {
      return <Typography style={{ color: "darkGreen" }}>{value}</Typography>;
    }
    if (isDate(value)) {
      return formatDate(value);
    }

    return value;
  };

  const renderRow = (key: string, value: any) => {
    return (
      <TableRow key={key}>
        <TableCell style={{ verticalAlign: "top", width: 100 }}>
          {isObject(value) || isArray(value) ? (
            <IconButton onClick={() => toggleCollapse(key)}>
              {isObject(value) &&
                (collapsed[key] ? <UnfoldMore /> : <UnfoldLess />)}
            </IconButton>
          ) : undefined}
        </TableCell>
        {Number.isNaN(Number(key)) && (
          <TableCell style={{ color: "darkblue" }} width={200}>
            {Number.isNaN(Number(key)) ? camelCaseToSpaces(key) : ""}
          </TableCell>
        )}
        <TableCell>
          <Collapse in={!collapsed[key]}>{renderValue(value)}</Collapse>
        </TableCell>
      </TableRow>
    );
  };

  const renderTable = () => {
    return Object.entries(data).map(([key, value]) => {
      return renderRow(key, value);
    });
  };

  console.log({ collapsed });

  return (
    <Table
      style={{
        border: "1px solid rgba(224, 224, 224, 1)",
        borderRadius: "16px",
      }}
    >
      <TableBody>{renderTable()}</TableBody>
    </Table>
  );
};

export default JSONViewer;
