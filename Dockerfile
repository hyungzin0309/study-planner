# 베이스 이미지 선택
FROM openjdk:17-jdk-oraclelinux7

# 작업 디렉토리 설정
WORKDIR /study-planner

# 소스 코드 복사
COPY /application/build/libs/application.jar application.jar

# 포트 노출
EXPOSE 8080

# 애플리케이션 실행 명령
CMD ["java", "-cp", "application.jar","com.studyHelper.StudyHelperMainApp"]
