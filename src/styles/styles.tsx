import { StyleSheet } from "react-native";
import { fontSize } from "./fontSize";
import { colors } from "./colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        paddingHorizontal: 12
    },
    viewRows: {
        flexDirection: "row"
    },
    viewRowsSpaceBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textTitle: {
        fontSize: fontSize.xl,
        fontFamily: "Arial",
        color: colors.primaryColor,
        fontWeight: "bold",
        paddingVertical: 8,
    },
    textBig: {
        fontSize: fontSize.l,
        lineHeight: 28,
    },
    textNormal: {
        fontSize: fontSize.m,
        color: colors.dark,
        fontWeight: "normal",
    },
    textBold: {
        fontSize: fontSize.m,
        fontWeight: "bold",
    },
    textPrimaryColor: {
        color: colors.primaryColor
    },
    textDarkColor: {
        color: colors.dark,
    },
    viewCode: {
        backgroundColor: colors.dark,
        paddingVertical: 12,
        paddingHorizontal: 2,
        borderRadius: 8,
        marginTop: 4,
        marginBottom: 8,
    },
    textCode: {
        fontSize: fontSize.m,
        flexWrap: "wrap",
        paddingBottom: 6,
        color: colors.light
    }
})