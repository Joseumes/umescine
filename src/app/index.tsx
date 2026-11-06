
import {Alert,Image,Pressable,ScrollView,StyleSheet,Text,View,} from 'react-native';
import {SafeAreaProvider,SafeAreaView,} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Cine Umes</Text>
          <Text style={styles.subtitle}>Reserva tu próxima función</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/mision-espacial.jpeg')}
              style={styles.cover}
              resizeMode="cover"
              accessibilityLabel="Portada de Misión espacial"
            />
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.movieTitle}>Misión espacial</Text>
            <Text style={styles.detail}>Ciencia ficción</Text>
            <Text style={styles.duration}>120 minutos</Text>
          </View>
        </View>
        <View style={styles.schedule}>
          <Text style={styles.scheduleTitle}>Horarios</Text>
          <View style={styles.timesRow}>
            <View style={styles.timeOption}>
              <Text style={styles.timeText}>10:00</Text>
            </View>
            <View style={styles.fondoazul}>
              <Text style={styles.timeText}>14:00</Text>
            </View>
            <View style={styles.timeOption}>
              <Text style={styles.timeText}>18:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.schedule}>
          <Text style={styles.scheduleTitle}>Tipo de entrada</Text>
          <View style={styles.timesRow}>
            <View style={styles.timeOption}>
              <Text style={styles.textoazul}>Genral 
                35
              </Text>
            </View>
            <View style={styles.timeOption}>
              <Text style={styles.textobblanco}>estudiante 25</Text>
            </View>

          </View>
        </View>
        <View style={styles.schedule}>
          <Text style={styles.scheduleTitle}>Resumen de Compra</Text>
          <View style={styles.timesRow}>
            <View style={styles.timeOption}>
              <Text style={styles.timeText}>Pelicula 
              </Text> 
            </View>
            <View style={styles.timeOption}>
              <Text style={styles.timeText}>Mision espacial</Text>
            </View>

          </View>
          <View style={styles.timesRow}>
            <View style={styles.timeOption}>
              <Text style={styles.timeText}>Horario 
              </Text> 
            </View>
            <View style={styles.timeOption}>
              <Text style={styles.timeText}>17:00</Text>
            </View>

          </View>
          <View style={styles.timesRow}>
            <View style={styles.timeOption}>
              <Text style={styles.timeText}>Entrada 
              </Text> 
            </View>
            <View style={styles.timeOption}>
              <Text style={styles.timeText}>2 generales</Text>
            </View>
            

          </View>
          <View style={styles.timesRow}>
            <View style={styles.timeOption}>
              <Text style={styles.timeText}>Total
              </Text> 
            </View>
            <View style={styles.timeOption}>
              <Text style={styles.textoazul}>Q70</Text>
            </View>

          </View>
          
        </View>
        

        <Pressable
          style={styles.button}
          onPress={() =>
            Alert.alert('Reserva', '¡Próximamente podrás reservar!')
          }
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Reservar función</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 32,
  },
  header: {
    alignContent: 'center',
    marginBottom: 24,
  },
  heading: {
    color: '#172033',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: '#626b7a',
    fontSize: 16,
    marginTop: 6,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#172033',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  imageContainer: {
    width: 100,
    height: 120,
    overflow: 'hidden',
    
  },
  cover: {
    width: '100%',
    height: '100%',
    backgroundColor: '#dce1ea',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    padding: 18,
    gap: 8,
  },
  movieTitle: {
    color: '#172033',
    fontSize: 21,
    fontWeight: '700',
  },
  detail: {
    color: '#626b7a',
    fontSize: 15,
  },
  duration: {
    color: '#626b7a',
    fontSize: 15,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3157c8',
    borderRadius: 12,
    paddingVertical: 15,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  schedule: {
    marginTop: 24,
    color: '#1153e1',
    borderRadius: 15,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  scheduleTitle: {
    color: '#172033',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  timesRow: {
    flexDirection: 'row',
    gap: 12,
  },
  timeOption: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#faf8f8',
    borderRadius: 10,
    paddingVertical: 12,
  },

  fondoazul:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#4468d2',
    borderRadius:10,
    paddingVertical:12,
  },
  timeText: {
    color: '#3157c8',
    fontSize: 15,
    fontWeight: '600',
  },
  textoazul: {
    color: '#0442fa',
    fontSize: 20,
    fontWeight: '800',
  },
  textobblanco:{
    color:'#ffffff',
    fontSize:20,
    fontWeight:'800',
  }
});

export default App;
