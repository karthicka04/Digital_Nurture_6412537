import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    @Test
    public void testCalculatorAssertions() {
        Calculator calc = new Calculator();
        assertEquals(10, calc.add(7, 3));
        assertTrue(calc.isPositive(5));
        assertFalse(calc.isPositive(-2));
        assertNotNull(calc.getWelcomeMessage());
        assertNull(calc.getNullMessage());
    }
}
