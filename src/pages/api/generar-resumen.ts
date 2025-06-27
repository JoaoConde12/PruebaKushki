export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {      
    try {
        const { characterData } = await request.json();
        const geminiApiKey = import.meta.env.GEMINI_API_KEY;

        if (!geminiApiKey) {
            return new Response(
                JSON.stringify({ error: "La clave API de Gemini no está configurada." }),
                { status: 500 }
            );
        }

        const prompt = `Basado en los siguientes datos JSON de un personaje de Rick and Morty, escribe un párrafo super corto describiéndolo de forma que alguien que nunca ha visto la serie conozca al personaje: ${JSON.stringify(characterData)}`;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${geminiApiKey}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                }),
            }
        );   

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error de la API de Gemini:", errorData);
            return new Response(
                JSON.stringify({
                    error: `Error de la API de Gemini: ${errorData.error.message}`,
                }),
                { status: response.status }
            );
        }

        const data = await response.json();
        const summary = data.candidates[0].content.parts[0].text;

        return new Response(JSON.stringify({ summary }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "No se pudo generar el resumen." }),
            { status: 500 }
        );
    }
};