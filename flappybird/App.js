import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import Physics from './physics';
import { useEffect, useState } from 'react';

export default function App() {
  const [running, setRunning] = useState(false)
  const [gameEngine, setGameEngine] = useState(null)
  const [currentPoints, setCurrentPoints] = useState(0)
  useEffect(() => {
    setRunning(false)
  }, [])
  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', fontSize: 40, fontWeight: 'bold', margin: 20}}>{currentPoints}</Text>
      <GameEngine 
        ref={(ref) => {setGameEngine(ref)}}
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={(e) => {
          switch(e.type){
            case 'game_over': 
              setRunning(false)
              gameEngine.stop()
              setCurrentPoints(0)
            case 'new_point':
              setCurrentPoints(currentPoints + 1)
              break;
          }
        }}
        style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}} 
      >
        <StatusBar style="auto" hidden={true} />
      </GameEngine>
      {
        !running ? 
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => { setCurrentPoints(0);setRunning(true); gameEngine.swap(entities()) }} style={{backgroundColor: 'black', paddingHorizontal: 30, paddingVertical: 10}}>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 30}}>START GAME</Text>
          </TouchableOpacity>
        </View> : 
        null
      }
    </View>
  );
}


