import { View, Text, ScrollView } from 'react-native'
import { styles } from './style'
import { useEffect, useState } from 'react'
import * as Location from 'expo-location'

// const LOCATION_TASK_NAME = 'background-location-task'

// type LocationData = {
//   coords: {
//     latitude: number
//     longitude: number
//     accuracy: number
//   }
//   timestamp: number
// }

// type TaskBody = {
//   data?: { locations: LocationData[] }
//   error?: Error | null
// }

// TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }: TaskBody) => {
//   if (error) {
//     console.error('Erro na task:', error)
//     return
//   }
//   if (data?.locations?.length) {
//     const location = data.locations[0]
//     console.log(
//       `📍 BG: ${new Date(location.timestamp).toLocaleTimeString()}: ${location.coords.latitude}, ${location.coords.longitude}`,
//     )
//   }
// })

const TrackLocation = () => {
  // const [isTracking, setIsTracking] = useState(false)
  const [logs, setLogs] = useState<string[]>([])

  useEffect(() => {
    let subscription: Location.LocationSubscription

    const subscribe = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.warn('Permissão de foreground negada')
        return
      }

      subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,
          distanceInterval: 5,
        },
        (location) => {
          const log = `📡 ${new Date().toLocaleTimeString()}: ${location.coords.latitude}, ${location.coords.longitude}`
          console.log(log)
          setLogs((prev) => [log, ...prev])
        },
      )
    }

    subscribe()

    return () => {
      if (subscription) subscription.remove()
    }
  }, [])

  // const startTracking = async () => {
  //   const { status: fg } = await Location.requestForegroundPermissionsAsync()
  //   const { status: bg } = await Location.requestBackgroundPermissionsAsync()

  //   if (fg !== 'granted' || bg !== 'granted') {
  //     alert('Permissões negadas')
  //     return
  //   }

  //   const started =
  //     await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME)
  //   if (!started) {
  //     await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
  //       accuracy: Location.Accuracy.High,
  //       timeInterval: 5000,
  //       distanceInterval: 5,
  //       foregroundService: {
  //         notificationTitle: 'Rastreamento ativo',
  //         notificationBody: 'Seu app está rastreando a localização.',
  //       },
  //       pausesUpdatesAutomatically: false,
  //       showsBackgroundLocationIndicator: true,
  //     })
  //   }
  //   setIsTracking(true)
  // }

  // const stopTracking = async () => {
  //   const started =
  //     await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME)
  //   if (started) {
  //     await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME)
  //   }
  //   setIsTracking(false)
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TrackLocation</Text>

      <ScrollView style={styles.logs}>
        {logs.map((log, index) => (
          <Text key={index}>{log}</Text>
        ))}
      </ScrollView>
    </View>
  )
}

export { TrackLocation }
