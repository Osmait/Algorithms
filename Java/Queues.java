public class Queues {
    private static final int DEFAULT_CAPACIY = 10;
    private int maxSize;
    private int[] queueArray;
    private int front;

    private int rear;
    private int nItems;

    public Queues(){
        this(DEFAULT_CAPACIY);
    }
    public  Queues(int size){
        maxSize = size;
        queueArray = new int[size];
        front = 0;
        rear = -1;
        nItems = 0;
    }


    public boolean insert(int x) {
        if (isFull()) {
            return false;
        }
        // If the back of the queue is the end of the array wrap around to the front
        rear = (rear + 1) % maxSize;
        queueArray[rear] = x;
        nItems++;
        return true;
    }
    public int remove(){
        if(isEmpty()){
            return -1;
        }
        int temp = queueArray[front];
        front = (front + 1) % maxSize;
        nItems--;
        return  temp;
    }
    public  int peekFront(){
        return  queueArray[front];
    }
    public  int peekRear(){
        return  queueArray[rear];
    }
    public boolean isEmpty(){
        return  nItems == 0;
    }
    public  boolean isFull(){
        return  nItems ==maxSize;
    }
    public int getSize(){
        return  nItems;
    }

   @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (int i = front;; i = ++i % maxSize) {
            sb.append(queueArray[i]).append(", ");
            if (i == rear) {
                break;
            }
        }
        sb.replace(sb.length() - 2, sb.length(), "]");
        return sb.toString();
    }
}