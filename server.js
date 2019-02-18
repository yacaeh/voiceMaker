const { buildUrl, voices } = require('oddcast-tts-demo');

function loadRandomVoice(msg) {
	var voiceArray = [voices.dayoung, voices.hyeryun, voices.hyuna, voices.jihun, voices.jimin, voices.junwoo, voices.narae, voices.sena, voices.yumi, voices.yura]
	// voiceToUse = voiceArray[Math.floor((Math.random() * 10))];
    // do something with the selected value
    voiceArray.forEach(function(voiceToUse){
        var sound = buildUrl(msg, voiceToUse);
        console.log(sound);
        var fs = require('fs'),
        request = require('request');
      request
        .get(sound)
        .on('error', function(err) {
          // handle error
        })
        .pipe(fs.createWriteStream("./voices/"+msg+"_"+voiceToUse.name+'.mp3'));
    });
}

var msgs = [
"울산 동구 노인 복지관 피난 안내도"
,"지금 여러분께서 계신 곳은 울산 동구 노인복지관 2층 대강당입니다." 
,"비상시에는 A경로로 신속하게 이동하여 주시기 바랍니다."
,"A경로로 대피하기 곤란한 경우, B경로와 C경로로 대피하여 주시기 바랍니다."
,"피난 시 주의 사항은 다음과 같습니다."
,"첫째, 화재시에는 물에 젖은 손수건 등으로 코와 입을 막고, 자세를 최대한 낮추고 이동하세요."
,"둘째, 화재 시 엘리베이터 탑승은 위험 하오니 반드시 안전한 피난계단을 이용하세요."
,"셋째, 피난 계단을 이용하여 건물 밖으로 대피하는 것이 제일 안전하며, 하층부로 피난이 곤란한 경우만 옥상으로 피난하여 주세요."
,"안전을 최우선으로 생각하는 울산 동구 노인 복지관"]

msgs.forEach(function(msg){
    loadRandomVoice(msg);
});

