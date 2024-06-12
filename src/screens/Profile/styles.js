import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#121212',
    padding: 12,
    width: '100%',
    paddingBottom: 20
  },
  avatar: {
    margin: 20,
    gap: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1f1b24',
    padding: 20,
    borderRadius: 5
  },
  infos: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 8
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500'
  },
  subTitle: {
    color: '#808080',
    fontSize: 15,
    fontWeight: '400'
  },
  sobreMim: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
    backgroundColor: '#1f1b24',
    margin: 10,
    padding: 25,
    borderRadius: 5,
    width: 350,
    height: 'auto',
  },
  sobreTxt: {
    fontSize: 15,
    color: '#fff'
  },
  tech: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    width: 325
  },
  techsTitle: {
    color: '#7c5295',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 25
  },
  projectsTitle: {
    color: '#7c5295',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 30
  },
  carrosel: {
    width: 325,
    height: 150,
    marginBottom: 30
  },
  imagesProjects: {
    width: 300,
    height: 150,
    borderRadius: 5,
    margin: 10,
  }
});

export default styles;
