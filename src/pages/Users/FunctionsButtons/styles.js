import styled from "styled-components";
import { PDFDownloadLink } from "@react-pdf/renderer";

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;

  button {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.brownFour};
    margin-left: 10px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const PdfButton = styled(PDFDownloadLink).attrs((props) => ({
  style: {
    color: props.theme.brownFour,
    fontSize: props.theme.fonts.sizeSmall,
    marginLeft: 10,
    marginTop: 1,
  },
}))``;
