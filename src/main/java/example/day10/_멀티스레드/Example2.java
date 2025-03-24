package example.day10._멀티스레드;

class 작업스레드A extends Thread{
    @Override
    public void run() {
        try{
            int count = 1;
            while (true) {
                Thread.sleep(1000); // Thread.sleep(밀리초) : 해당 스레드가 밀리초 만큼 일시정지 함수 // 예외처리
                Thread.currentThread().setName("작업스레드A"); // 스레드 이름 정의/만들기 함수
                count++; // 변수증가
                System.out.println("현재 스레드명 :" + Thread.currentThread().getName() + "count" + count);
            }
        }
        catch (Exception e) {
            System.out.println(e);
        }
    }
}
public class Example2 {
    // (1) main스레드
    public static void main(String[] args) {
        // (2) 작업스레드 생성
        작업스레드A thread1 = new 작업스레드A();
        // (3) 작업스레드 실헹
        thread1.start();

        try {
            int count = 1;
            while (true) {
                Thread.sleep(1000);
                count++;
                System.out.println("현재 스레드명 :" + Thread.currentThread().getName() + "count" + count);
        }
        }catch (Exception e) {
            System.out.println(e);
        }
        }

    }

