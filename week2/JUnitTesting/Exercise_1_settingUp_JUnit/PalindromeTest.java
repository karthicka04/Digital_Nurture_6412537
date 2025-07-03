package JUnit_Testing.Exercise_1_settingUp_JUnit;

import org.junit.Test;
import static org.junit.Assert.*;

public class PalindromeTest {

    @Test
    public void testPalindromeTrue() {
        Palindrome p = new Palindrome();
        assertTrue(p.isPalindrome("racecar"));
    }

    @Test
    public void testPalindromeFalse() {
        Palindrome p = new Palindrome();
        assertFalse(p.isPalindrome("hello"));
    }
}