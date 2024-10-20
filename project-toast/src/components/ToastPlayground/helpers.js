import { AlertOctagon, AlertTriangle, CheckCircle, Info } from "react-feather";

export const getToastIcon = (variant) => {
    switch (variant) {
        case "notice":
            return Info;
        case "warning":
            return AlertTriangle;
        case "success":
            return CheckCircle;
        case "error":
            return AlertOctagon;
        default:
            return Info;
    }
};
