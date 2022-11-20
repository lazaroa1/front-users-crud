import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import moment from "moment";

function PdfPage() {
  const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>Nome</Text>
        </View>
        <View>
          <Text>CPF</Text>
        </View>
        <View>
          <Text>Login</Text>
        </View>
        <View>
          <Text>Situação</Text>
        </View>
        <View>
          <Text>Periodo de Nascimento</Text>
        </View>
        <View>
          <Text>Periodo da Criação</Text>
        </View>
        <View>
          <Text>Periodo da Alteração</Text>
        </View>
        <View>
          <Text>Faixa Etaria</Text>
        </View>
        {savedUsers.map((item) => (
          <View key={item.id}>
            <Text>{item.name}</Text>
            <Text>{item.cpf}</Text>
            <Text>{item.login}</Text>
            <Text>{item.status}</Text>
            <Text>{moment(item.birth_date).format("DD/MM/YYYY")}</Text>
            <Text>{moment(item.created_at).format("DD/MM/YYYY")}</Text>
            <Text>{moment(item.updated_at).format("DD/MM/YYYY")}</Text>
            <Text>{moment().diff(item.birth_date, "years")}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}

export default PdfPage;
