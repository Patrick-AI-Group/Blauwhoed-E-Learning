/* eslint-disable jsx-a11y/alt-text */
import "server-only";
import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
  renderToBuffer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 54,
    backgroundColor: "#F5F2ED",
    color: "#14284B",
    fontFamily: "Helvetica",
  },
  frame: { flex: 1, border: "1 solid #14284B", padding: 42 },
  brand: { fontSize: 14, letterSpacing: 2 },
  label: { marginTop: 70, fontSize: 12, color: "#2B5797" },
  title: { marginTop: 12, fontSize: 36, fontWeight: 400 },
  name: { marginTop: 24, fontSize: 25 },
  body: { marginTop: 18, fontSize: 12, lineHeight: 1.6, color: "#1A1A1A" },
  competence: { marginTop: 7, fontSize: 11, color: "#1A1A1A" },
  footer: {
    position: "absolute",
    left: 42,
    right: 42,
    bottom: 42,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  qr: { width: 76, height: 76 },
  code: { fontSize: 9, color: "#6B7280" },
});

export async function renderCertificatePdf(input: {
  name: string;
  level: number;
  title: string;
  competences: string[];
  issuedAt: Date;
  expiresAt: Date;
  code: string;
  verificationUrl: string;
  qrDataUrl: string;
}) {
  return renderToBuffer(
    <Document
      title={`Certificaat ${input.name} - Niveau ${input.level}`}
      author="Blauwhoed AI Academy"
    >
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.frame}>
          <Text style={styles.brand}>BLAUWHOED · AI ACADEMY</Text>
          <Text style={styles.label}>CERTIFICAAT VAN BEKWAAMHEID</Text>
          <Text style={styles.title}>
            Niveau {input.level} · {input.title}
          </Text>
          <Text style={styles.name}>{input.name}</Text>
          <Text style={styles.body}>
            Heeft alle lessen en praktijkopdrachten afgerond, het niveau-examen
            behaald en de verplichte securitydeeltoets met 100% afgesloten.
          </Text>
          <View style={{ marginTop: 22 }}>
            {input.competences.slice(0, 6).map((item) => (
              <Text key={item} style={styles.competence}>
                • {item}
              </Text>
            ))}
          </View>
          <View style={styles.footer}>
            <View>
              <Text style={styles.code}>
                Uitgegeven: {input.issuedAt.toLocaleDateString("nl-NL")}
              </Text>
              <Text style={styles.code}>
                Geldig tot: {input.expiresAt.toLocaleDateString("nl-NL")}
              </Text>
              <Text style={styles.code}>Verificatiecode: {input.code}</Text>
              <Text style={styles.code}>{input.verificationUrl}</Text>
            </View>
            <Image src={input.qrDataUrl} style={styles.qr} />
          </View>
        </View>
      </Page>
    </Document>,
  );
}
