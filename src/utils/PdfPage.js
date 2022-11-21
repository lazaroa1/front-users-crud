import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import moment from "moment";

function PdfPage() {
  const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const styles = StyleSheet.create({
    section: {
      marginBottom: 10,
    },
  });

  return (
    <Document>
      <Page size="A4">
        {savedUsers.map((item) => (
          <View key={item.id} style={styles.section}>
            <Text>Nome: {item.name}</Text>
            <Text>CPF: {item.cpf}</Text>
            <Text>Login: {item.login}</Text>
            <Text>Situação: {item.status}</Text>
            <Text>
              Periodo de Nascimento:
              {moment(item.birth_date).format("DD/MM/YYYY")}
            </Text>
            <Text>
              Periodo da Criação: {moment(item.created_at).format("DD/MM/YYYY")}
            </Text>
            <Text>
              Periodo da Alteração:{" "}
              {moment(item.updated_at).format("DD/MM/YYYY")}
            </Text>
            <Text>Faixa Etaria: {moment().diff(item.birth_date, "years")}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}

export default PdfPage;
