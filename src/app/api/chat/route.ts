import { NextRequest, NextResponse } from 'next/server';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const query = message.toLowerCase().trim();
    const { knowledgeBase, defaultResponse } = PORTFOLIO_DATA.aiAssistant;

    // Search local RAG knowledge base for matching keywords
    let match = knowledgeBase.find((kb) =>
      kb.keywords.some((keyword) => query.includes(keyword))
    );

    const replyText = match ? match.response : defaultResponse;

    // In a production setup, replace this section with OpenAI / Gemini API call:
    /*
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: PORTFOLIO_DATA.aiAssistant.systemPrompt },
        { role: "user", content: message }
      ],
    });
    const replyText = response.choices[0].message.content;
    */

    return NextResponse.json({
      reply: replyText,
      timestamp: new Date().toISOString(),
      source: match ? 'local-rag-index' : 'default-model-fallback',
      status: 'success',
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process AI response' },
      { status: 500 }
    );
  }
}
